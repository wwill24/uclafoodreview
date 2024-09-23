import { Input } from "@/components/ui/input";
import { Minus } from "lucide-react";
import { useRef } from "react";

interface OTPProps {
    setOtp: Function;
}

export default function OTP({ setOtp }: OTPProps) {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        const currentOtp = inputRefs.current.map(input => input?.value || '').join('');

        if (value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }

        setOtp(currentOtp); // Update the OTP state in the parent
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        const pastedData = e.clipboardData.getData('text');
        const inputArray = pastedData.split('').slice(0, 6); // Handle only the first 6 characters

        inputArray.forEach((char, idx) => {
            if (inputRefs.current[index + idx]) {
                inputRefs.current[index + idx]!.value = char;
            }
        });

        // Update the OTP state after pasting
        const currentOtp = inputRefs.current.map(input => input?.value || '').join('');
        setOtp(currentOtp);
    };

    return (
        <div className="flex flex-row justify-between items-center w-full">
            {Array.from({ length: 3 }).map((_, i) => (
                <Input
                    key={i}
                    ref={(el) => {
                        inputRefs.current[i] = el;
                    }}
                    maxLength={1}
                    className="w-[12%] h-100vh text-xl text-center p-0"
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onPaste={(e) => handlePaste(e, i)}
                />
            ))}
            <Minus />
            {Array.from({ length: 3 }).map((_, i) => (
                <Input
                    key={i + 3}
                    ref={(el) => {
                        inputRefs.current[i + 3] = el;
                    }}
                    maxLength={1}
                    className="w-[12%] h-100vh text-xl text-center p-0"
                    onChange={(e) => handleChange(e, i + 3)}
                    onKeyDown={(e) => handleKeyDown(e, i + 3)}
                    onPaste={(e) => handlePaste(e, i)}
                />
            ))}
        </div>
    );
}
