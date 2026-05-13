export type Post ={
    id: number;
    slug : string;
    title : string;
    content : string
}

//define the shape of the Authentication context
export type AuthContextType = {
    isAuthenticated : boolean;
    login :() => void;
    logout :() =>void;
}