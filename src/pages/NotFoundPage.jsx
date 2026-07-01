import { Link } from 'react-router-dom';
import { Home, Bus } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-amber-400 rounded-3xl flex items-center justify-center">
                        <Bus size={48} className="text-gray-900" />
                    </div>
                </div>
                <h1 className="text-8xl font-black text-amber-400 mb-2">404</h1>
                <h2 className="text-2xl font-bold text-white mb-3">Halaman Tidak Ditemukan</h2>
                <p className="text-gray-400 mb-8">
                    Sepertinya bus Anda salah jalur. Halaman yang Anda cari tidak tersedia.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all"
                >
                    <Home size={18} />
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}
