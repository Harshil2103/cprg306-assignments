import Link from "next/link"; 
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="week2">week 2 Assignment</Link><br></br>
        <Link href="week-3">week 3 assignment</Link><br></br>
        <Link href="week-4">week 4 assignment</Link><br></br>
        <Link href="week-5">week 5 assignment</Link>
      </p>
    </main>
  );
}