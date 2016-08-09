switch (condition) {
  case "first":
    // code
    break;

  case "third":
    // code
    break;

  default:
    // code
  }

switch (condition) {

  // obvious fall through
  case "first":
  case "second":
    // code
    break;

  case "third":
    // code

  /* falls through */
  default:
  // code
}

switch (condition) {
  case "first":
    // code
    break;

  case "second":
    // code
    break;

  // no default
}
