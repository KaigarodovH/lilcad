import { ButtonGroup, Button, Stack } from "@mui/material"

export default function AppMenu() {
    return (
        <Stack justifyContent="center" min-width={"max-content"} spacing={1} padding={1} borderRight={1} minHeight="100%">
            <Button variant="outlined">Add</Button>
            <Button>Print</Button>
            <Button>Delete</Button>
            <Button>Search</Button>
            <Button>Search</Button>
            <Button>Search</Button>
        </Stack>
    )
}

