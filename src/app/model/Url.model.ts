export class Config{
private  baseUrl:string|undefined;

constructor( baseUrl:string|undefined){
    this.baseUrl = baseUrl;
}
 // Getter
 getBaseUrl(): string | undefined {
    return this.baseUrl;
}

// Setter
setBaseUrl(baseUrl: string | undefined): void {
    this.baseUrl = baseUrl;
}

}