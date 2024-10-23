import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {XIcon} from "lucide-react";
import {CartItem} from "@/lib/types";
import Link from "next/link";
import Flex from "@/components/typohgraphy/flex";
import Paragraph from "@/components/typohgraphy/paragraph";

interface CardDetailsProps {
    items: CartItem[]
}

export default function CartTable({items}: CardDetailsProps) {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {items.map(item => (
                <TableRow key={item.id}>
                    <TableCell>
                        <Flex className="flex-row justify-start items-center gap-4 m-2">
                            <Link href={`/${item.category}/${item.id}`}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                />
                            </Link>
                            <Link href={`/${item.category}/${item.id}`}>
                                <Paragraph>{item.name}</Paragraph>
                            </Link>
                        </Flex>
                    </TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.price} €</TableCell>
                    <TableCell>
                        <Input type="text" placeholder={`${item.quantity} pcs.`}/>
                    </TableCell>
                    <TableCell>{item.quantity * item.price} €</TableCell>
                    <TableCell>
                        <Button type="button" variant="ghost" size="icon">
                            <XIcon className="h-4 w-4"/>
                        </Button>
                    </TableCell>
                </TableRow>))}
        </TableBody>
    </Table>
}