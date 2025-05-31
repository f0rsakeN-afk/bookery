export const maskEmail = (email: string) => {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  const masked = name.length > 3 ? name.slice(0, 3) + "***" : "***";
  return `${masked}@${domain}`;
};
