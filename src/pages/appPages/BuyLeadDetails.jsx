import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const BuyLeadDetails = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch()
    }, [])
    return (
        <div>BuyLeadDetails</div>
    )
}

export default BuyLeadDetails