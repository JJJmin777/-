
function sortReviews(event, sortBy) {
    const button = event.target; // 클릭된 버튼 참조
    const bookId = button.dataset.bookId;
    
    if (!bookId) {
        console.error('Book ID is missing from the button dataset.');
        alert('Failed to sort reviews: Book ID not found.');
        return;
    }

    fetch(`/reviews?sort=${sortBy}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch sorted reviews');
            }
            return response.json();
        })
        .then(data => {
            const reviewSection = document.getElementById('review-section');
            reviewSection.innerHTML = data.html; // 서버에서 반환한 HTML로 교체
        })
        .catch(err => {
            console.error(err);
            alert('Failed to sort reviews');
        });
}
