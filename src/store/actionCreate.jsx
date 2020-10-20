import { 
	HANDLEMESSAGE,
	DELETEITEM,
	EDITITEM,
	FINISHWORK
 } 
 from './actionType'

export const handlemessage = (val) => ({
	type: HANDLEMESSAGE,
	val
})

export const deleteitem = (id) => ({
	type: DELETEITEM,
	id
})

export const edititem = (id, val, bool) => ({
	type: EDITITEM,
	id,
	val,
	bool
})

export const finishwork = (id, bool) => ({
	type: FINISHWORK,
	id,
	bool
})

