import type { ApiResponse, LoginRequest, RegisterRequest } from "@/types/Api";
import { request } from "http";

const url = "http://localhost:8080/auth";

export const login = async (request: LoginRequest): Promise<ApiResponse<string>> => {
    const response = await fetch(`${url}/login`,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(request)
    });

    const data: ApiResponse<string> = await response.json();
    console.log(data);

    if (!response.ok) {
    throw new Error(data.message || "Error al iniciar sesión");
    }

    return data;
}

export const register = async (request: RegisterRequest): Promise<unknown> => {
    const response = await fetch(`${url}/login`,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(request)
    });

    const data = await response.json();

    if (!response.ok) {
    throw new Error(data.message || "Error intentar registrarse");
    }

    return data;
}