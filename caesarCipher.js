// Caesar Cipher: Julius Caesar's Secret Party 🎉

// Variables and initial values
let partyLocation = "GARDEN"; // String
const shiftValue = 3; // Number (used for Caesar cipher shift)
let encryptedMessage = ""; // Will hold the encrypted message
let decryptedMessage = ""; // Will hold the decrypted message
let isPartySafe = false; // Boolean indicating if the message is safe

// Check if shiftValue is an integer
if (!Number.isInteger(shiftValue)) {
  console.log("Error: Shift value must be an integer.");
} else {
  // Function to encrypt a message using Caesar Cipher
  function encryptMessage(message, shift) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[A-Z]/)) {
        let code = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
        result += String.fromCharCode(code);
      } else {
        result += char;
      }
    }

    return result;
  }

  // Function to decrypt a message using Caesar Cipher
  function decryptMessage(message, shift) {
    return encryptMessage(message, 26 - shift);
  }

  // Encrypt the party location
  encryptedMessage = encryptMessage(partyLocation, shiftValue);
  console.log("Encrypted Message 🔐:", encryptedMessage);

  // Decrypt the message
  decryptedMessage = decryptMessage(encryptedMessage, shiftValue);
  console.log("Decrypted Message 🔓:", decryptedMessage);

  // Check if the decrypted message matches the original
  isPartySafe = decryptedMessage === partyLocation;
  console.log("Is the party safe? ✅", isPartySafe);
}
