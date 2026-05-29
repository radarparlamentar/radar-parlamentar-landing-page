export async function GET() {
  const res = await fetch(
    'https://api.github.com/repos/SEU_USER/SEU_REPO/actions/runs?per_page=5',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 * 60 },
    }
  )
  const data = await res.json()
  return Response.json(data.workflow_runs)
}