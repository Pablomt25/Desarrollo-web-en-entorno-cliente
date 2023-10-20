array = ["jhon Smith", "Jackie Chan"];

array.map(el => el.split(" "))

array2 = ['john','Smith']

array.map(el => el.split(" ").map(nombre => nombre[0]).join(" "));