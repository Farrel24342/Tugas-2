const daftarEmail = [
    { email: "maximjamule@example.com" },
    { email: "invalid_email" },
    { email: "paccoudang@example.org" },
    { email: "invalid.email" }
];

function validasiDaftarEmail(emailArray) {

    for (let i = 0; i < emailArray.length; i++) {

        if (emailArray[i].email.includes("@") && emailArray[i].email.includes(".")) {
            console.log(emailArray[i].email + " : Email Valid");
        } else {
            console.log(emailArray[i].email + " : Email Tidak Valid");
        }

    }

}

validasiDaftarEmail(daftarEmail);