export function validateString(value: unknown, maxLength: number) {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
}

export function getErrorMessage(error: unknown): string {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
}

export function getRandomColor() {
  const colors = [
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-red-500",
    "text-purple-500",
    "text-cyan-500",
    "text-pink-500",
    "text-orange-500",
    "text-indigo-500",
  ];

  const shuffledColors = colors.sort(() => Math.random() - 0.5);
  const randomIndex = Math.floor(Math.random() * shuffledColors.length);
  return shuffledColors[randomIndex];
}
