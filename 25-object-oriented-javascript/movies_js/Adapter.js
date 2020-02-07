class Adapter {
  constructor(obj){
    this.baseUrl = obj.baseUrl
  }

  get(){
    return fetch(this.baseUrl)
    .then(resp => resp.json())
  }

  patch(suffix, body) {
    return fetch(`${this.baseUrl}/${suffix}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(body)
    })
  }
}