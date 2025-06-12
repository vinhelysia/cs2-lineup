// Data
const maps = [
  { id: "dust2", name: "Dust 2", image: "images/de_dust2/icon/Map_icon_de_dust2.webp" },
  { id: "mirage", name: "Mirage", image: "images/de_mirage/icon/Set_mirage.webp" },
  { id: "inferno", name: "Inferno", image: "images/de_inferno/icon/CS2_inferno_logo.webp" },
  { id: "cache", name: "Cache", image: "images/de_cache/icon/Set_cache.webp" },
  { id: "overpass", name: "Overpass", image: "images/de_overpass/icon/CS2_overpass_logo.webp" },
  { id: "nuke", name: "Nuke", image: "images/de_nuke/icon/Set_nuke_2.webp" },
  { id: "train", name: "Train", image: "images/de_train/icon/CS2_Train_logo.webp" },
  { id: "vertigo", name: "Vertigo", image: "images/de_vertigo/icon/Vertigo-logo-new.webp" },
  { id: "ancient", name: "Ancient", image: "images/de_ancient/icon/Map_icon_de_ancient.webp" },
  { id: "anubis", name: "Anubis", image: "images/de_anubis/icon/Map_icon_de_anubis.webp" },
]

const lineups = {
  dust2: {
    t: {
      smoke: [
        {
          id: 1,
          name: "B Window Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/9TxFr9fhmRU?si=8ZahmrmEXoOnJEkm",
          thumbnail: "https://img.youtube.com/vi/9TxFr9fhmRU/maxresdefault.jpg",
          side: "t",
          difficulty: "Easy",
          description: "Outside Tunnel",
        },
        {
          id: 2,
          name: "B Doors",
          position: "W + Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/SDpVqvt6CiE?si=XadGhTNsRS7NhOwl",
          thumbnail: "https://img.youtube.com/vi/SDpVqvt6CiE/maxresdefault.jpg",
          side: "t",
          difficulty: "Medium",
          description: "T Spawn",
        },
        {
          id: 3,
          name: "B Doors",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/q3Z6fxZSpvI?si=xBsdZTZpmw6N5-ZL",
          thumbnail: "https://img.youtube.com/vi/q3Z6fxZSpvI/maxresdefault.jpg",
          side: "t",
          difficulty: "Easy",
          description: "Outside Tunnel",
        },
        {
          id: 4,
          name: "Xbox Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/H5Kn0GYaYLk?si=5WYz4GBSGjzyzPem",
          thumbnail: "https://img.youtube.com/vi/H5Kn0GYaYLk/maxresdefault.jpg",
          side: "t",
          difficulty: "Easy",
          description: "T Spawn",
        },
      ],
      flash: [
      ],
      molotov: [],
    },
    ct: {
      smoke: [],
      flash: [       
        {
        id: 1,
        name: "A Long Pop Flash",
        position: "Left Click Throw",
        video: "https://www.youtube.com/embed/v-9a3iH24SY?si=9wrK7zJ6B9vIK_ht",
        thumbnail: "https://img.youtube.com/vi/v-9a3iH24SY/maxresdefault.jpg",
        side: "Both Sides",
        difficulty: "Easy",
        description: "CT Spawn",
      },
      {
        id: 2,
        name: "A Long Door Pop Flash",
        position: "Left Click Throw",
        video: "https://www.youtube.com/embed/NbvBa5YN6mA?si=ncSzjuavnn1ENwlr",
        thumbnail: "https://img.youtube.com/vi/NbvBa5YN6mA/maxresdefault.jpg",
        side: "CT-Side",
        difficulty: "Easy",
        description: "A Long",
      }
    ],
      molotov: [],
    },
    both: {
      smoke: [],
      flash: [
        {
        id: 1,
        name: "A Site Pop Flash",
        position: "Left Click Throw",
        video: "https://www.youtube.com/embed/nII0kP-9cM0?si=3TG38HfYEukt4DdI",
        thumbnail: "https://img.youtube.com/vi/nII0kP-9cM0/maxresdefault.jpg",
        side: "Both Sides",
        difficulty: "Easy",
        description: "A Long",
      },
    ],
      molotov: [],
    },
  },
  mirage: {
    t: {
      smoke: [
        {
          id: 1,
          name: "Window Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/inVWMcJgcg4?si=H7HVv2Ow_fn5ceiW",
          thumbnail: "https://img.youtube.com/vi/inVWMcJgcg4/maxresdefault.jpg",
          description: "T spawn",
          difficulty: "Easy", 
          side: "T-Side",
        },
        {
          id: 2,
          name: "Connector Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/0JRQA8Hbi4o?si=IHMHoYXgA-ldLmRQ",
          thumbnail: "https://img.youtube.com/vi/0JRQA8Hbi4o/maxresdefault.jpg",
          description: "T spawn",
          difficulty: "Easy",
          side: "T-Side",
        },
        {
          id: 3,
          name: "B Short Smoke",
          position: "Left Click Throw",
          video: "https://www.youtube.com/embed/fYskW-JDtw0?si=MiFrLa-jF81B4nwp",
          thumbnail: "https://img.youtube.com/vi/fYskW-JDtw0/maxresdefault.jpg",
          description: "Alley",
          difficulty: "Easy",
          side: "T-Side",
        },
        {
          id: 4,
          name: "CT Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/meVVpilngS8?si=Ed89Uuh0OrUVQenR",
          thumbnail: "https://img.youtube.com/vi/meVVpilngS8/maxresdefault.jpg",
          description: "Ramp",
          difficulty: "Easy",
          side: "T-Side",
        },
        {
          id: 6,
          name: "Door Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/zDiXMVx7_4M?si=IQlQscqxsYNEmWqh",
          thumbnail: "https://img.youtube.com/vi/zDiXMVx7_4M/maxresdefault.jpg",
          description: "Alley",
          difficulty: "Easy",
          side: "T-Side",
        },
        {
          id: 7,
          name: "Stairs Smoke",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/kORH5FkYZd0?si=zfgV7Y1vfTbuuHIC",
          thumbnail: "https://img.youtube.com/vi/kORH5FkYZd0/maxresdefault.jpg",
          description: "Ramp",
          difficulty: "Easy",
          side: "T-Side",
        },
        {
          id: 8,
          name: "Kitchen Window",
          position: "Jump + Left Click Throw",
          video: "https://www.youtube.com/embed/CCIm4jyY8V0?si=53uSnSfYS27l3y6r",
          thumbnail: "https://img.youtube.com/vi/CCIm4jyY8V0/maxresdefault.jpg",
          description: "Alley",
          difficulty: "Easy",
          side: "T-Side",
        },
      ],
      flash: [
        {
          id: 1,
          name: "Palace Flash",
          position: "Left Click Throw",
          video: "https://www.youtube.com/embed/7aXfe3-1GlE?si=CjRV62gSxQSBN8kD",
          thumbnail: "https://img.youtube.com/vi/7aXfe3-1GlE/maxresdefault.jpg",
          description: "Ramp",
          difficulty: "Easy",
          side: "T-Side",
        },
      ],
      molotov: [],
    },
    ct: {
      smoke: [
        {
          id: 1,
          name: "A Site Retake Smoke",
          position: "Left Click Throw",
          video: "https://www.youtube.com/embed/example1",
          thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg",
          description: "CT Spawn",
          difficulty: "Medium",
          side: "CT-Side",
        },
      ],
      flash: [],
      molotov: [],
    },
    both: {
      smoke: [
        {
          id: 1,
          name: "Mid Smoke (Universal)",
          position: "Left Click Throw",
          video: "https://www.youtube.com/embed/universalsmoke",
          thumbnail: "https://img.youtube.com/vi/universalsmoke/maxresdefault.jpg",
          description: "Works from multiple positions",
          difficulty: "Medium",
          side: "Both Sides",
        },
      ],
      flash: [
        {
          id: 1,
          name: "Site Flash (Universal)",
          position: "Right Click Throw",
          video: "https://www.youtube.com/embed/universalflash",
          thumbnail: "https://img.youtube.com/vi/universalflash/maxresdefault.jpg",
          description: "Effective from both sides",
          difficulty: "Easy",
          side: "Both Sides",
        },
      ],
      molotov: [],
    },
  },
  inferno: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  cache: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  overpass: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  nuke: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  train: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  vertigo: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  ancient: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
  anubis: {
    t: { smoke: [], flash: [], molotov: [] },
    ct: { smoke: [], flash: [], molotov: [] },
    both: { smoke: [], flash: [], molotov: [] },
  },
}

// DOM Elements
const mapGrid = document.getElementById("map-grid")
const smokeGrid = document.getElementById("smoke-grid")
const flashGrid = document.getElementById("flash-grid")
const molotovGrid = document.getElementById("molotov-grid")
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
const sideButtons = document.querySelectorAll(".side-btn")
const modal = document.getElementById("lineup-modal")
const modalTitle = document.getElementById("modal-title")
const modalSide = document.getElementById("modal-side")
const modalPosition = document.getElementById("modal-position")
const modalDescription = document.getElementById("modal-description")
const modalDifficulty = document.getElementById("modal-difficulty")
const closeModal = document.querySelector(".close-modal")

// Current state
let currentMap = "dust2"
let currentType = "smoke"
let currentSide = "t"

// Initialize the app
function init() {
  populateMapGrid()
  populateLineups(currentMap)
  setupEventListeners()
  updateActiveSide() // ensures icons render on first load
  updateTabIcons() // set grenade icons on first load
  hideModal() // guarantee modal hidden on initial load
}

// Populate map grid
function populateMapGrid() {
  mapGrid.innerHTML = ""
  maps.forEach((map) => {
    const mapCard = document.createElement("div")
    mapCard.className = `map-card ${map.id === currentMap ? "active" : ""}`
    mapCard.dataset.mapId = map.id

    mapCard.innerHTML = `
        <img src="${map.image}" alt="${map.name}">
        <p>${map.name}</p>
      `

    mapGrid.appendChild(mapCard)
  })
}

// Populate lineups for the selected map and type
function populateLineups(mapId) {
  populateLineupGrid("smoke", mapId)
  populateLineupGrid("flash", mapId)
  populateLineupGrid("molotov", mapId)
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

// Get lineups for current side including both-sided lineups
function getLineupsForCurrentSide(mapId, type) {
  const mapData = lineups[mapId]
  if (!mapData) return []

  const sideLineups = mapData[currentSide]?.[type] || []
  const bothLineups = mapData.both?.[type] || []

  return [...sideLineups, ...bothLineups]
}

// Populate a specific lineup grid
function populateLineupGrid(type, mapId) {
  const grid = document.getElementById(`${type}-grid`)
  grid.innerHTML = ""

  const allLineups = getLineupsForCurrentSide(mapId, type)

  if (!allLineups || allLineups.length === 0) {
    grid.innerHTML = `
        <div class="no-lineups">
          No ${type} lineups available for ${maps.find((m) => m.id === mapId).name} (${currentSide.toUpperCase()}-Side)
        </div>
      `
    return
  }

  allLineups.forEach((lineup) => {
    const card = document.createElement("div")
    card.className = "lineup-card"

    const icon = getGrenadeIcon(type)
    const difficultyClass = getDifficultyClass(lineup.difficulty)

    // Create thumbnail with play button overlay
    let mediaHTML = ""
    if (lineup.video) {
      const thumbnail =
        lineup.thumbnail || `https://img.youtube.com/vi/${getYouTubeVideoId(lineup.video)}/maxresdefault.jpg`
      mediaHTML = `
        <div class="video-thumbnail-container" data-lineup='${JSON.stringify(lineup)}' data-type="${type}">
          <img class="lineup-media video-thumbnail" src="${thumbnail}" alt="${lineup.name}">
          <div class="play-button-overlay">
            <i class="fas fa-play"></i>
          </div>
          <div class="video-duration-badge">Video</div>
        </div>
      `
    } else if (lineup.image) {
      mediaHTML = `<img class="lineup-media lineup-image" src="${lineup.image}" alt="${lineup.name}" data-lineup='${JSON.stringify(lineup)}' data-type="${type}">`
    }

    card.innerHTML = `
      <div class="lineup-header">
        <div class="lineup-title">
          <h3>${icon} ${lineup.name}</h3>
          <span class="badge ${difficultyClass}">${lineup.difficulty}</span>
        </div>
        <p class="lineup-position">${lineup.position}</p>
      </div>
      <div class="lineup-content">
        ${mediaHTML}
        <p class="lineup-description">${lineup.description}</p>
      </div>
    `

    grid.appendChild(card)
  })
}

// Get grenade icon HTML
function getGrenadeIcon(type) {
  switch (type) {
    case "smoke":
      return '<img src="images/Nades/smoke.webp" alt="smoke" class="icon-img large" />'
    case "flash":
      return '<img src="images/Nades/flash.webp" alt="flash" class="icon-img large" />'
    case "molotov":
      return '<img src="images/Nades/molotov.webp" alt="molotov" class="icon-img large" />'
    default:
      return ""
  }
}

// Get difficulty class
function getDifficultyClass(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "badge-easy"
    case "Medium":
      return "badge-medium"
    case "Hard":
      return "badge-hard"
    default:
      return ""
  }
}

// Setup event listeners
function setupEventListeners() {
  // Map grid click
  mapGrid.addEventListener("click", (e) => {
    const mapCard = e.target.closest(".map-card")
    if (mapCard) {
      currentMap = mapCard.dataset.mapId
      updateActiveMap()
      populateLineups(currentMap)
    }
  })

  // Side buttons click
  sideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentSide = button.dataset.side
      updateActiveSide()
      populateLineups(currentMap)
    })
  })

  // Tab buttons click
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentType = button.dataset.type
      updateActiveTabs()
    })
  })

  // Lineup card click (delegation) - Make entire card clickable
  document.addEventListener("click", (e) => {
    const lineupCard = e.target.closest(".lineup-card")

    if (lineupCard) {
      // Find the media element within the card to get the lineup data
      const mediaElement = lineupCard.querySelector("[data-lineup]")

      if (mediaElement) {
        const lineup = JSON.parse(mediaElement.dataset.lineup)
        const type = mediaElement.dataset.type
        openModal(lineup, type)
      }
    }
  })

  // Close modal
  closeModal.addEventListener("click", hideModal)

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal()
    }
  })

  // Close modal on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideModal()
    }
  })

  // Prevent modal from closing when clicking inside modal content
  document.querySelector(".modal-content").addEventListener("click", (e) => {
    e.stopPropagation()
  })
}

// Update active map
function updateActiveMap() {
  const mapCards = document.querySelectorAll(".map-card")
  mapCards.forEach((card) => {
    if (card.dataset.mapId === currentMap) {
      card.classList.add("active")
    } else {
      card.classList.remove("active")
    }
  })
}

// Update active side
function updateActiveSide() {
  sideButtons.forEach((button) => {
    if (button.dataset.side === currentSide) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
    const imgName =
      button.dataset.side === "t"
        ? "T.webp"
        : button.dataset.side === "ct"
        ? "ct.webp"
        : "any.96745b45.png"
    const label =
      button.dataset.side === "both"
        ? "Both"
        : `${button.dataset.side.toUpperCase()}-Side`
    button.innerHTML = `<img src="images/Side/${imgName}" alt="${button.dataset.side}" class="icon-img" /> ${label}`
  })
}

// Update active tabs
function updateActiveTabs() {
  tabButtons.forEach((button) => {
    if (button.dataset.type === currentType) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })

  tabContents.forEach((content) => {
    if (content.id === `${currentType}-content`) {
      content.classList.add("active")
    } else {
      content.classList.remove("active")
    }
  })

  updateTabIcons()
}

// Replace grenade icons in tab buttons
function updateTabIcons() {
  tabButtons.forEach((btn) => {
    let imgPath = ""
    switch (btn.dataset.type) {
      case "smoke":
        imgPath = "images/Nades/smoke.webp"
        break
      case "flash":
        imgPath = "images/Nades/flash.webp"
        break
      case "molotov":
        imgPath = "images/Nades/molotov.webp"
        break
    }
    btn.innerHTML = `<img src="${imgPath}" alt="${btn.dataset.type}" class="icon-img large" /> ${btn.textContent.trim().split(" ").pop()}`
  })
}

// Hide modal function - PROPERLY STOPS VIDEOS
function hideModal() {
  modal.style.display = "none"
  document.body.style.overflow = ""

  // Completely remove and recreate media container to stop all videos
  const modalMediaContainer = document.querySelector(".modal-media-container")
  if (modalMediaContainer) {
    modalMediaContainer.innerHTML = ""
  }
}

// Open modal with lineup details
function openModal(lineup, type) {
  modalTitle.innerHTML = `${getGrenadeIcon(type)} ${lineup.name}`
  modalSide.textContent = lineup.side || "Unknown"
  modalPosition.textContent = lineup.position
  modalDescription.textContent = lineup.description
  modalDifficulty.className = `badge ${getDifficultyClass(lineup.difficulty)}`
  modalDifficulty.textContent = lineup.difficulty

  const modalMediaContainer = document.querySelector(".modal-media-container")
  modalMediaContainer.innerHTML = ""

  if (lineup.video) {
    if (lineup.video.includes("youtube.com") || lineup.video.includes("youtu.be")) {
      const iframe = document.createElement("iframe")
      iframe.src = lineup.video + "&autoplay=1"
      iframe.className = "modal-media youtube-embed"
      iframe.frameBorder = "0"
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      iframe.allowFullscreen = true
      modalMediaContainer.appendChild(iframe)
    } else {
      const video = document.createElement("video")
      video.controls = true
      video.autoplay = true
      video.className = "modal-media"
      video.innerHTML = `<source src="${lineup.video}" type="video/mp4">`
      modalMediaContainer.appendChild(video)
    }
  } else if (lineup.image) {
    const img = document.createElement("img")
    img.src = lineup.image
    img.alt = lineup.name
    img.className = "modal-media"
    modalMediaContainer.appendChild(img)
  }

  document.body.style.overflow = "hidden"
  modal.style.display = "flex"
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init)
