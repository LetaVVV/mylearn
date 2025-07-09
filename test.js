let users = [
  { name: "Анна", email: "anna@example.com", address: { city: "Казань", street: "Пушкина" } },
  { name: "Виктор", email: "victor@example.com", address: { city: "Уфа", street: "Ленина" } },
  { name: "Сергей", email: "sergey@example.com", address: { city: "Сочи", street: "Горького" } }
];


for (let i = 0; i < users.length; i++) {
  const { name, email, address: { city } } = users[i];
  console.log(`Имя: ${name}, Email: ${email},Город: ${city}`);
}

//вложенная деструктуризация: