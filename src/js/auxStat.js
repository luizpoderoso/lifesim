export const validChange = (stat, changeValue) => {
    const newValue = stat + changeValue;

    return (newValue > 100
                ? 100
                : newValue < 0
                    ? 0
                    : newValue);
}