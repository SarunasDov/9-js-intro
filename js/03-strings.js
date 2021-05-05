/*
STRINGS (tekstas)

inicijavimo budai:
viengubos (') kabutes
dvigubos (") kabutes
backtick (`) kabutes

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes.
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);

// Dvigubos (") kabutes.
const kabutes12 = 'Dvigubos (") kabutes.';
console.log(kabutes12);

// Viengubos (') ir dvigubos (") kabutes.
const kabutes1e = 'Viengubos (\') ir dvigubos (") kabutes.';
console.log(kabutes1e);

const kabutes2e = "Viengubos (') ir dvigubos (\") kabutes.";
console.log(kabutes2e);

// Tekste backslash \ yra jega!

const backslash = 'Tekste backslash \\ yra jega!';
console.log(backslash);


// \n - enter
// \t - tab


const imgSrc = './img/logo.png';
const HTML = '<header>\
            <img src="' + imgSrc + '" alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                </nav>\n\
            </header>';

console.log(HTML);


const H0 = '<header>' +
                '<img>' +
                '<nav>' +
                    '<a></a>' +
                    '<a></a>' +
                    '<a></a>' +
                    '<a></a>' +
                '<nav>' +
            '</header>' +

const H2 = `<header>
<img src="${imgSrc}" alt="logo" class="logo">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </nav>
</header>`;
console.log(H2);