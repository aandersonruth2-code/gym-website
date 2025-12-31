import GoogleReviewsWidget from "google-reviews-widget";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-10 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Customer Reviews
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          See what people are saying about our optical shop on Google
        </p>
      </header>

      {/* Google Reviews */}
      <div className="w-full max-w-4xl google-reviews-wrapper">
        <GoogleReviewsWidget instanceId="CCEga0jGRGJACXHPI39g" />
      </div>
    </div>
  );
}

export default App;
