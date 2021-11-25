import React from "react";
import MUIDataTable from "mui-datatables";
// import { removeMovie } from "../../service/movies-service";

import {
    createTheme ,
    MuiThemeProvider,
    withStyles
} from "@material-ui/core/styles";

export default function CostumeTable(props) {
    const { data, title, columns } = props;
    // function deleteMovie(RowsDeleted, data) {
    //     const ids = RowsDeleted.data.map(d => d.dataIndex);
    //     console.log(data, ids);
    //     // removeMovie(params._id).then(res => alert(res))
    // }
    const options = {
        filterType: "checkbox",
        // onRowsDelete: deleteMovie
    }
    const getMuiTheme = createTheme ({
            overrides: {
                MUIDataTable: {
                    root: {
                        backgroundColor: "#F7050"
                    },
                    paper: {
                        boxShadow: "none"
                    }
                },
                MUIDataTableBodyCell: {
                    root: {
                        maxHeight:"10vh",
                        maxWidth:"10vw", 
                        overflow:"hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                },
                MuiTypographyBody:{

                    MUIDataTableFilter: {
                        backgroundColor: "red"
                    },
                }
            }
        });
    return (
        <MuiThemeProvider theme={getMuiTheme}>
            <MUIDataTable
                title={title}
                options={options}
                data={data}
                columns={columns}
            />
        </MuiThemeProvider>
    )
}
