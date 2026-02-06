"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    className?: string;
    cursor?: boolean;
}

export function TypeWriter({
    text,
    speed = 50,
    delay = 0,
    onComplete,
    className = "",
    cursor = true,
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setHasStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!hasStarted) return;

        if (displayText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, displayText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
            onComplete?.();
        }
    }, [displayText, text, speed, hasStarted, onComplete]);

    return (
        <span className={className}>
            {displayText}
            {cursor && !isComplete && <span className="typing-cursor" />}
        </span>
    );
}

// Multi-line typewriter for sequences
interface TypeWriterSequenceProps {
    lines: { text: string; delay?: number }[];
    speed?: number;
    onComplete?: () => void;
    className?: string;
}

export function TypeWriterSequence({
    lines,
    speed = 40,
    onComplete,
    className = "",
}: TypeWriterSequenceProps) {
    const [currentLine, setCurrentLine] = useState(0);
    const [completedLines, setCompletedLines] = useState<string[]>([]);

    const handleLineComplete = () => {
        setCompletedLines(prev => [...prev, lines[currentLine].text]);

        if (currentLine < lines.length - 1) {
            setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, lines[currentLine].delay || 200);
        } else {
            onComplete?.();
        }
    };

    return (
        <div className={className}>
            {completedLines.map((line, i) => (
                <div key={i} className="font-mono">{line}</div>
            ))}
            {currentLine < lines.length && (
                <TypeWriter
                    text={lines[currentLine].text}
                    speed={speed}
                    onComplete={handleLineComplete}
                    className="font-mono"
                />
            )}
        </div>
    );
}

// Roles cycling typewriter
interface RoleTypeWriterProps {
    roles: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export function RoleTypeWriter({
    roles,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
    className = "",
}: RoleTypeWriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < currentRole.length) {
                        setDisplayText(currentRole.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), pauseDuration);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(currentRole.slice(0, displayText.length - 1));
                    } else {
                        setIsDeleting(false);
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayText}
            <span className="typing-cursor" />
        </span>
    );
}
