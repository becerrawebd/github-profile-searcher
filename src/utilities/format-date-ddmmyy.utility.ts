export function formatDateDDMMYY(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString()
}