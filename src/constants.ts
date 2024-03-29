export class Constants {

    static shared = new Constants();

    private dev = {
        url: "http://localhost:3000/portfolio/"
    }

    private prod = {
        url: "https://my-endpoints.onrender.com/portfolio/"
    }

    baseUrl: string = this.prod.url;
}
