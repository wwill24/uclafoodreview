import { Input } from "@/components/ui/input";
import { Minus } from "lucide-react";
import { useRef } from "react";

export default function OTP() {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus();
        }
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
                />
            ))}
        </div>
    );
}
