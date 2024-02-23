export default function Validations(activity) {
    const newErrors = {};

    if (activity.name.length < 3) {
        newErrors.name = 'Activity is required and must be at least 3 characters';
    } else {
        newErrors.name = '';
    }

    if (activity.difficulty === 0) {
        newErrors.difficulty = 'Difficult must be at least 1';
    } else {
        newErrors.difficulty = '';
    }

    if (activity.season.length < 1) {
        newErrors.season = 'Season is required';
    } else {
        newErrors.season = '';
    }

    if (activity.countries.length < 1) {
        newErrors.countries = 'Countries is required';
    } else {
        newErrors.countries = '';
    }
    return newErrors
}
