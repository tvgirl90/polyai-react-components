export const range = (n: number) => {
    return [...Array(n)];
};

export const batch = <T>(arr: T[], n: number) => {
    if (arr.length === 0) {
        return [];
    } else {
        return range(Math.ceil((arr.length) / n)).map((_, i) =>
            range(Math.min(n, arr.length - i * n)).map((__, j) => arr[i * n + j]),
        );
    }
};