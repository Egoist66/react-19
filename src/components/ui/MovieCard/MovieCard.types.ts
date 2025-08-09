export type MovieCardprops = {
    image: string;
    rating: number | string;
    className?: string;
    setValue: ((value: React.SetStateAction<number>) => void);
    val?: number
}