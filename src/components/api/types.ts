type getAllRequest = {
    callback: (data: any) => void
    handleError: (error: any) => void   
}


type getAllByAddressRequest = {
    address: string
    callback: (data: any) => void
    handleError: (error: any) => void
}

type getAllByIdRequest = {
    id: string
    callback: (data: any) => void
    handleError: (error: any) => void
}

export type {
    getAllRequest,
    getAllByAddressRequest,
    getAllByIdRequest
}