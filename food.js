function findFood() {
    fetch('http://numbersapi.com')
    .then((res) => res.json())
    .then((data) => {
            console.log(data);
    }
        
        )

}