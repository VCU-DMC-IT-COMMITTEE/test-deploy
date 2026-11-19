import LoginForm from '@/components/GalleryAdmin/LoginForm';
export default async function GalleryAdminLogin({ searchParams }: { searchParams: Promise<{ expired?: string }> }) {
  const { expired } = await searchParams;
  return <main className="ga-login"><p className="ga-eyebrow">Developing Men of Color</p><h1>Gallery administration</h1>
    <p className="ga-muted">Sign in with your gallery administrator account.</p><LoginForm expired={expired === '1'} /></main>;
}
