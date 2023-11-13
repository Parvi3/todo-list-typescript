export interface IDropdown {
    className?: string;
    id: string;
    onCloseJob: (id: string) => void;
    onCloseStudy: (id: string) => void;
    onCloseHome: (id: string) => void;
    onCloseReset: (id: string) => void;
}