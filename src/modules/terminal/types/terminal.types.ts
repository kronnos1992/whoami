export type TerminalEntryType = "input" | "output" | "info" | "success" | "error";

export interface TerminalEntry {
  id: string;
  type: TerminalEntryType;
  content: string | string[];
}

export interface CommandResult {
  type: TerminalEntryType;
  content: string | string[];
  navigate?: string;
}
