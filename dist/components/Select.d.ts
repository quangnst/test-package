interface Option {
    value: string;
    label: string;
}
export declare const Select: ({ options, defaultValue, onChange, }: {
    options: Option[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export {};
