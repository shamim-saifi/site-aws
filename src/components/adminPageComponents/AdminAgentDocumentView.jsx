import React from 'react'
import { useLocation } from 'react-router-dom'

const AdminAgentDocumentView = () => {
    const location=useLocation
    const sendImg=location.state.img

    alert(location)
    alert(sendImg)
  return (
    <div>AdminAgentDocumentView</div>
  )
}

export default AdminAgentDocumentView