class EventsAPI {
  async getEvents() {
    const data = await fetch(
      "https://api.stonks.com/principal/event?status=upcoming&perPage=25&orderBy=starts_at,ASC"
    ).then((response) => response.json());
    return data.data;
  }
}

export const eventsAPI = new EventsAPI();
