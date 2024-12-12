import React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const TreeMap = () => {
    return (
        <Box sx={{ minHeight: 352, minWidth: 250, position: 'fixed' }}>
            <SimpleTreeView>
                <TreeItem itemId="grid" label="Категории">
                    <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                    <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                    <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
            </SimpleTreeView>
        </Box>
    );
}

export default TreeMap;