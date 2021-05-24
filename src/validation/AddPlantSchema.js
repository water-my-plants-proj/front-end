import * as yup from 'yup'

const addPlantSchema = yup.object().shape({
		nickname: yup
        .string()
        .trim()
        .required('Your plant must have a nickname'),
		species: yup
        .string()
				.min(2, 'No species names exist shorter than 2 characters')
        .trim()
        .required('Your plant must be given a species'),
		h20Frequency: yup
        .string()
				.trim()
				.required('Your plant must be given a watering schedule')
})

export default addPlantSchema