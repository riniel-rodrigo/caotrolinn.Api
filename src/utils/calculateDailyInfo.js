import dayjs from 'dayjs';

export function calculateDailyInfo(pet) {
    const inputDate = dayjs(pet.inputDate);
    const now = dayjs();
    const estimatedDeparture = pet.estimatedDeparture ? dayjs(pet.estimatedDeparture) : null;

    const currentDailyCount = Math.max(now.diff(inputDate, 'day') + 1, 1);

    let totalExpectedDaily = null;
    if (estimatedDeparture) {
        totalExpectedDaily = Math.max(estimatedDeparture.diff(inputDate, 'day') + 1, 1);
    }

    return {
        currentDailyCount,
        totalExpectedDaily
    };
}