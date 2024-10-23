import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function SizeSelect() {
    return <Select>
        <SelectTrigger>
            <SelectValue placeholder="Choose a size"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="xs">XS</SelectItem>
            <SelectItem value="s">S</SelectItem>
            <SelectItem value="m">M</SelectItem>
            <SelectItem value="l">L</SelectItem>
            <SelectItem value="xl">XL</SelectItem>
        </SelectContent>
    </Select>
}
