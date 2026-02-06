"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
    showHeader?: boolean;
}

export function TerminalWindow({
    title = "terminal",
    children,
    className = "",
    showHeader = true
}: TerminalWindowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`terminal-window ${className}`}
        >
            {showHeader && (
                <div className="terminal-header">
                    <div className="flex gap-2">
                        <div className="terminal-dot terminal-dot-red" />
                        <div className="terminal-dot terminal-dot-yellow" />
                        <div className="terminal-dot terminal-dot-green" />
                    </div>
                    <span className="terminal-title">{title}</span>
                </div>
            )}
            <div className="terminal-body">
                {children}
            </div>
        </motion.div>
    );
}

// Command Line component for terminal output
interface CommandLineProps {
    command: string;
    output?: ReactNode;
    prompt?: string;
    showCursor?: boolean;
}

export function CommandLine({
    command,
    output,
    prompt = "$",
    showCursor = false
}: CommandLineProps) {
    return (
        <div className="mb-3">
            <div className="prompt">
                <span className="prompt-symbol">{prompt}</span>
                <span className="text-white">{command}</span>
                {showCursor && <span className="cursor-blink" />}
            </div>
            {output && (
                <div className="mt-1 text-gray-400 pl-4">
                    {output}
                </div>
            )}
        </div>
    );
}

// ASCII art display component
interface AsciiArtProps {
    art: string;
    className?: string;
}

export function AsciiArt({ art, className = "" }: AsciiArtProps) {
    return (
        <pre className={`font-mono text-xs md:text-sm leading-tight whitespace-pre ${className}`}>
            {art}
        </pre>
    );
}
