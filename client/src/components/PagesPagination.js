import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {PageItem, Pagination} from "react-bootstrap";

const PagesPagination = observer(() => {
    const {device} = useContext(Context)
    const pagesCount = Math.ceil(device._totalCount / device.limit)
    const pages = []

    for (let i=0; i<pagesCount ; i++) {
        pages.push(i+1)
    }
    return (
        <Pagination className="mt-4">
            {pages.map(page =>
                <PageItem
                    key = {page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </PageItem>
            )}
        </Pagination>
    );
});

export default PagesPagination;