export function Footer() {
    return (
        <footer className="text-gray-800 py-6 px-12 flex items-center justify-between shadow-xl">
        <div className="text-sm space-y-2">
          <p className="font-medium text-gray-600">&copy; 2025 All rights reserved!</p>
          <p>
            Website:{" "}
            <a
              href="https://www.etsy.com/shop/DesignGraphicPhotos"
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.etsy.com/shop/DesignGraphicPhotos
            </a>
          </p>
        </div>
        
        <div>
          <img
            className="h-16 w-16 rounded-full border-4 border-white shadow-md transition duration-300 transform hover:scale-105"
            src="https://i.etsystatic.com/isla/90e1f9/75359593/isla_300x300.75359593_ix70pzlb.jpg?version=0"
            alt="Shop Logo"
          />
        </div>
      </footer>


    )
}