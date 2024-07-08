import Button from "../button/Button";
import Pagination from "../pagination/Pagination";
import Table from "./table/Table";

export default function SectionList() {



    return (
        <section className="card users-container">

        <Table />


        <Button />
        <Pagination />
        </section>

    );
}