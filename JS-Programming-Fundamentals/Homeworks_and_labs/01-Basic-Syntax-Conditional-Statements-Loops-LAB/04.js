function foreginC(country) {
  switch (country) {
    case 'England':
    case 'USA':
      console.log('English');
      break;

    case 'Mexico':
    case 'Argentina':
    case 'Spain':
      console.log('Spanish');
      break;

    default:
      console.log('unknown');
  }
}
