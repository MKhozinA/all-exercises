const questions = [
    {
        type: 'multiple_choice',
        question: 'Siapakah presiden Indonesia pertama?',
        options: ['Soekarno', 'Soeharto', 'B.J. Habibie', 'Gus Dur'],
        correctAnswerIndex: 0
    },
    {
        type: 'multiple_choice',
        question: 'Apa ibu kota Indonesia?',
        options: ['Jakarta', 'Surabaya', 'Bandung', 'Yogyakarta'],
        correctAnswerIndex: 0
    },
    {
        type: 'essay',
        question: 'Apa simbol kimia untuk air?',
        placeholder: 'Masukkan jawaban Anda di sini...',
        correctAnswer: 'H2O'
    },
    {
        type: 'essay',
        question: 'Berapakah bilangan prima terkecil?',
        placeholder: 'Masukkan jawaban Anda di sini...',
        correctAnswer: '2'
    }
    // Tambahkan pertanyaan sesuai kebutuhan
];

export default questions;
