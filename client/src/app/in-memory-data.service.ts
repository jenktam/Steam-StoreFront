import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  //create db of games and return them
  createDb() {
    const games = [
      {
        id: 573680,
        type: 2,
        name: "Real Farm",
        discounted: false,
        discount_percent: 0,
        original_price: 1999,
        final_price: 1999,
        currency: "USD",
        large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/573680/capsule_616x353.jpg?t=1504182577",
        small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/573680/capsule_184x69.jpg?t=1504182577",
        windows_available: true,
        mac_available: false,
        linux_available: false,
        streamingvideo_available: false,
        header_image: "http://cdn.akamai.steamstatic.com/steam/apps/573680/header.jpg?t=1504182577",
        controller_support: "full"
      },
      {
          id: 692590,
          type: 0,
          name: "DEFECTIVE",
          discounted: false,
          discount_percent: 0,
          original_price: 1999,
          final_price: 1999,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/692590/capsule_616x353.jpg?t=1504196887",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/692590/capsule_184x69.jpg?t=1504196887",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/692590/header.jpg?t=1504196887",
          controller_support: "full"
      },
      {
          id: 698160,
          type: 0,
          name: "DinosaurIsland",
          discounted: false,
          discount_percent: 0,
          original_price: 1999,
          final_price: 1999,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/698160/capsule_616x353.jpg?t=1503970591",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/698160/capsule_184x69.jpg?t=1503970591",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/698160/header.jpg?t=1503970591",
          controller_support: "full"
      },
      {
          id: 684510,
          type: 0,
          name: "Orn the tiny forest sprite",
          discounted: false,
          discount_percent: 0,
          original_price: 1999,
          final_price: 1999,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/684510/capsule_616x353.jpg?t=1504282965",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/684510/capsule_184x69.jpg?t=1504282965",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/684510/header.jpg?t=1504282965",
          controller_support: "full"
      },
      {
          id: 707720,
          type: 0,
          name: "Ragna Maya",
          discounted: false,
          discount_percent: 0,
          original_price: 1099,
          final_price: 1099,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/707720/capsule_616x353.jpg?t=1504308122",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/707720/capsule_184x69.jpg?t=1504308122",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/707720/header.jpg?t=1504308122",
          controller_support: "full"
      },
      {
          id: 682270,
          type: 0,
          name: "Gender Bender",
          discounted: false,
          discount_percent: 0,
          original_price: 1999,
          final_price: 1999,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/682270/capsule_616x353.jpg?t=1503708092",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/682270/capsule_184x69.jpg?t=1503708092",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/682270/header.jpg?t=1503708092",
          controller_support: "full"
      },
      {
          id: 687280,
          type: 0,
          name: "HumanKind: The Awakening",
          discounted: false,
          discount_percent: 1999,
          original_price: 1999,
          final_price: 0,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/687280/capsule_616x353.jpg?t=1503336487",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/687280/capsule_184x69.jpg?t=1503336487",
          windows_available: true,
          mac_available: true,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/687280/header.jpg?t=1503336487",
          controller_support: "full"
      },
      {
          id: 694470,
          type: 0,
          name: "Guitar Hardness",
          discounted: false,
          discount_percent: 0,
          original_price: 2999,
          final_price: 2999,
          currency: "USD",
          large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/694470/capsule_616x353.jpg?t=1504120175",
          small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/694470/capsule_184x69.jpg?t=1504120175",
          windows_available: true,
          mac_available: false,
          linux_available: false,
          streamingvideo_available: false,
          header_image: "http://cdn.akamai.steamstatic.com/steam/apps/694470/header.jpg?t=1504120175",
          controller_support: "full"
      },
      {
        id: 431700,
        type: 0,
        name: "Age of Fear 3: The Legend",
        discounted: true,
        discount_percent: 10,
        original_price: 1999,
        final_price: 1799,
        currency: "USD",
        large_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/431700/capsule_616x353.jpg?t=1504285414",
        small_capsule_image: "http://cdn.akamai.steamstatic.com/steam/apps/431700/capsule_184x69.jpg?t=1504285414",
        windows_available: true,
        mac_available: true,
        linux_available: true,
        streamingvideo_available: false,
        discount_expiration: 1504890022,
        header_image: "http://cdn.akamai.steamstatic.com/steam/apps/431700/header.jpg?t=1504285414"
    }
    ];

    return { games }
  }
}
