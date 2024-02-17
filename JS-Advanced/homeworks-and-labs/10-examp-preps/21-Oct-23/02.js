showBookings(criteria) {
  if (this.bookings.length === 0) {
    throw new Error("No bookings have been made yet.");
  }

  if (criteria === "all") {
    const bookingList = this.bookings.map(booking => {
      return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
    });

    return [`All bookings(${this.bookingsCount}):`, ...bookingList].join('\n').trim();
  }

  const priceThreshold = criteria === "cheap" ? 100 : criteria === "expensive" ? 100 : null;

  if (priceThreshold === null) {
    throw new Error("Invalid criteria.");
  }

  const filteredBookings = this.bookings.filter(booking => {
    const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
    return criteria === "cheap" ? flight.price <= priceThreshold : flight.price > priceThreshold;
  });

  if (filteredBookings.length === 0) {
    return `No ${criteria} bookings found.`;
  }

  const bookingList = filteredBookings.map(booking => {
    return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
  });

  return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings:`, ...bookingList].join('\n').trim();
}