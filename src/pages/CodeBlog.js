import Card from "../components/Card";
import Search from "../components/Search";

export default function CodeBlog() {
  return (
    <div>
      <Search />
      <div className="grid grid-cols-3 gap-4 max-w-6xl m-auto pt-5">
        <div>
          <Card title="Title of the card" />
        </div>
      </div>
    </div>
  );
}
