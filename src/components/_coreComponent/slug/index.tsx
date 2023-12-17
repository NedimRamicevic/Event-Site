export const slugify = (str: string) => {
  const map: { [key: string]: string } = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "C",
    Ğ: "G",
    İ: "I",
    Ö: "O",
    Ş: "S",
    Ü: "U",
  };

  return str
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, (char) => map[char] || char)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
